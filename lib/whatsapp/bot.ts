import { eq, and, desc, gte } from "drizzle-orm";
import { db } from "@/db";
import { whatsappSessions, leads } from "@/db/schema";

const ACCOUNTING_SERVICES_MAP: Record<string, string> = {
  "1": "Accounting & Bookkeeping",
  "2": "GST Compliance & Return Filing",
  "3": "TDS & Professional Tax Compliance",
  "4": "Bank, Debtor & Creditor Reconciliation",
  "5": "MIS & Financial Reporting",
  "6": "Accounts Payable & Vendor Management",
  "7": "Billing & Ledger Management",
  "8": "E-Way Bill & E-Invoice Generation",
  "9": "Inventory & Stock Accounting",
  "10": "Tally Prime and Advanced Excel",
};

const WEALTH_GOALS_MAP: Record<string, string> = {
  "1": "Mutual Funds",
  "2": "Retirement Planning",
  "3": "Insurance Planning",
  "4": "Tax Saving",
  "5": "Child Education",
  "6": "Complete Financial Planning",
};

// Centralized reset state to prevent data-bleed between sessions
const baseResetState = {
  currentStep: "MENU",
  flowType: null,
  city: null,
  ageRange: null,
  incomeRange: null,
  familySize: null,
  wealthInterest: null,
  selectedServices: null,
};

export async function processIncomingMessage(
  phone: string,
  name: string,
  text: string
) {
  const session = await db
    .select()
    .from(whatsappSessions)
    .where(eq(whatsappSessions.phone, phone))
    .limit(1)
    .then((rows) => rows[0]);

  if (!session) {
    await db.insert(whatsappSessions).values({
      phone,
      name,
      currentStep: "MENU",
    });

    return "MENU";
  }

  // 1. Normalize text for the chaos protocol
  const normalized = text.trim().toLowerCase();

  const isAccounting =
    normalized === "accounting" ||
    (session.currentStep === "MENU" && normalized === "1");

  const isWealth =
    normalized === "wealth" ||
    (session.currentStep === "MENU" && normalized === "2");

  const isAdvisor =
    normalized === "advisor" ||
    (session.currentStep === "MENU" && normalized === "3");

  if (isAccounting) {
    await db
      .update(whatsappSessions)
      .set({
        flowType: "accounting",
        currentStep: "ACCOUNTING_SELECT",
      })
      .where(eq(whatsappSessions.phone, phone));

    return `📊 Business Services\n\nPlease select the services you're interested in:\n\n1️⃣ Accounting & Bookkeeping\n2️⃣ GST Compliance & Return Filing\n3️⃣ TDS & Professional Tax Compliance\n4️⃣ Bank, Debtor & Creditor Reconciliation\n5️⃣ MIS & Financial Reporting\n6️⃣ Accounts Payable & Vendor Management\n7️⃣ Billing & Ledger Management\n8️⃣ E-Way Bill & E-Invoice Generation\n9️⃣ Inventory & Stock Accounting\n\nYou may select multiple services.\n\nExample:\n1,2,10`;
  }

  if (isWealth) {
    await db
      .update(whatsappSessions)
      .set({
        flowType: "wealth",
        currentStep: "WEALTH_CITY",
      })
      .where(eq(whatsappSessions.phone, phone));

    return `💰 Wealth Advisory\n\nTo help our advisors understand your requirements better,\n\n📍 Please share your city or location.`;
  }

  if (isAdvisor) {
    // Spam Prevention Check: Only block if a "new" lead was created in the last 24 hours
    const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
    const existingLead = await db
      .select()
      .from(leads)
      .where(
        and(
          eq(leads.phone, phone),
          eq(leads.leadType, "advisor"),
          eq(leads.status, "new"),
          gte(leads.createdAt, twentyFourHoursAgo)
        )
      )
      .limit(1);

    if (existingLead.length === 0) {
      await db.insert(leads).values({
        phone,
        contactPerson: name,
        leadType: "advisor",
        service: "Direct Advisor Request",
        source: "whatsapp",
        status: "new",
      });
    }

    await db
      .update(whatsappSessions)
      .set(baseResetState)
      .where(eq(whatsappSessions.phone, phone));

    return `☎️ Connect With An Advisor\n\nThank you for contacting Niveshya.\n\nOne of our advisors will review your requirements and contact you shortly.\n\nIf you would prefer to speak with us directly:\n\n📞 +91 90223 91182\n\nYou can also continue messaging here anytime.`;
  }

  if (session.currentStep === "ACCOUNTING_SELECT") {
    // Map raw input (e.g., "1,2,10") to human-readable text
    const mappedServices = text
      .split(",")
      .map((val) => val.trim())
      .map((val) => ACCOUNTING_SERVICES_MAP[val] || val)
      .join(", ");

    await db.insert(leads).values({
      phone,
      contactPerson: name,
      leadType: "accounting",
      service: "Business Services",
      servicesRequested: mappedServices,
      source: "whatsapp",
      status: "new",
    });

    await db
      .update(whatsappSessions)
      .set(baseResetState)
      .where(eq(whatsappSessions.phone, phone));

    return `✅ Thank you for contacting Niveshya.\n\nYour business requirements have been recorded.\n\nA member of our advisory team will contact you shortly.\n\nIf you would prefer to speak with us directly:\n\n📞 +91 90223 91182\n\nYou can message us again anytime.`;
  }

  if (session.currentStep === "WEALTH_CITY") {
    await db
      .update(whatsappSessions)
      .set({
        city: text,
        currentStep: "WEALTH_AGE",
      })
      .where(eq(whatsappSessions.phone, phone));

    return `What is your age range?\n\n1️⃣ Under 25\n2️⃣ 25-35\n3️⃣ 35-45\n4️⃣ 45-60\n5️⃣ 60+`;
  }

  if (session.currentStep === "WEALTH_AGE") {
    await db
      .update(whatsappSessions)
      .set({
        ageRange: text,
        currentStep: "WEALTH_INCOME",
      })
      .where(eq(whatsappSessions.phone, phone));

    return `What is your approximate yearly income range?\n\n1️⃣ Below ₹5L\n2️⃣ ₹5L - ₹10L\n3️⃣ ₹10L - ₹25L\n4️⃣ ₹25L - ₹50L\n5️⃣ ₹50L+`;
  }

  if (session.currentStep === "WEALTH_INCOME") {
    await db
      .update(whatsappSessions)
      .set({
        incomeRange: text,
        currentStep: "WEALTH_FAMILY",
      })
      .where(eq(whatsappSessions.phone, phone));

    return `How many family members are financially dependent on you?`;
  }

  if (session.currentStep === "WEALTH_FAMILY") {
    await db
      .update(whatsappSessions)
      .set({
        familySize: text,
        currentStep: "WEALTH_GOAL",
      })
      .where(eq(whatsappSessions.phone, phone));

    return `What would you like help with?\n\n1️⃣ Mutual Funds\n2️⃣ Retirement Planning\n3️⃣ Insurance Planning\n4️⃣ Tax Saving\n5️⃣ Child Education\n6️⃣ Complete Financial Planning`;
  }

  if (session.currentStep === "WEALTH_GOAL") {
    // Map raw input to human-readable text
    const wealthGoal = WEALTH_GOALS_MAP[text.trim()] ?? text;

    await db.insert(leads).values({
      phone,
      contactPerson: name,
      leadType: "wealth",
      city: session.city,
      ageRange: session.ageRange,
      incomeRange: session.incomeRange,
      familySize: session.familySize,
      wealthInterest: wealthGoal,
      service: "Wealth Advisory",
      source: "whatsapp",
      status: "new",
    });

    await db
      .update(whatsappSessions)
      .set(baseResetState)
      .where(eq(whatsappSessions.phone, phone));

    return `✅ Thank you for contacting Niveshya Wealth Advisory.\n\nYour details have been recorded.\n\nA Niveshya advisor will review your profile and contact you shortly.\n\nIf you would like immediate assistance:\n\n📞 +91 90223 91182\n\nYou can also message us again anytime.`;
  }

  // FALLBACK
  if (session.currentStep !== "MENU") {
    await db
      .update(whatsappSessions)
      .set(baseResetState)
      .where(eq(whatsappSessions.phone, phone));
  }

  return "MENU";
}