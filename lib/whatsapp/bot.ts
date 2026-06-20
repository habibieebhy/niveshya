import { eq } from "drizzle-orm";

import { db } from "@/db";

import {
  whatsappSessions,
} from "@/db/schema";

export async function processIncomingMessage(
  phone: string,
  name: string,
  text: string
) {
  const session =
    await db
      .select()
      .from(
        whatsappSessions
      )
      .where(
        eq(
          whatsappSessions.phone,
          phone
        )
      )
      .limit(1)
      .then(
        (rows) => rows[0]
      );

  if (!session) {
    await db
      .insert(
        whatsappSessions
      )
      .values({
        phone,
        name,
        currentStep:
          "MENU",
      });

    return `MENU`;
  }

  if (
    session.currentStep ===
    "MENU"
  ) {
    if (
      text === "1" ||
      text === "accounting"
    ) {
      await db
        .update(
          whatsappSessions
        )
        .set({
          flowType:
            "accounting",

          currentStep:
            "ACCOUNTING_SELECT",
        })
        .where(
          eq(
            whatsappSessions.phone,
            phone
          )
        );

      return `📊 Business Services

Please select the services you're interested in:

1️⃣ Accounting & Bookkeeping

2️⃣ GST Compliance & Return Filing

3️⃣ TDS & Professional Tax Compliance

4️⃣ Bank, Debtor & Creditor Reconciliation

5️⃣ MIS & Financial Reporting

6️⃣ Accounts Payable & Vendor Management

7️⃣ Billing & Ledger Management

8️⃣ E-Way Bill & E-Invoice Generation

9️⃣ Inventory & Stock Accounting

🔟 Payroll Support & Salary Processing

You may select multiple services.

Example:
1,2,10`;
    }

    if (
      text === "2" ||
      text === "wealth"
    ) {
      await db
        .update(
          whatsappSessions
        )
        .set({
          flowType:
            "wealth",

          currentStep:
            "WEALTH_CITY",
        })
        .where(
          eq(
            whatsappSessions.phone,
            phone
          )
        );

      return `💰 Wealth Advisory

To help our advisors understand your requirements better,

📍 Please share your city or location.`;
    }

    if (
      text === "3" ||
      text === "advisor"
    ) {
      return `☎️ Connect With An Advisor

Thank you for contacting Niveshya.

One of our advisors will review your requirements and contact you shortly.

If you would prefer to speak with us directly, you may call:

📞 +91 90223 91182

You can also continue messaging here anytime.`;
    }
  }

  return `MENU`;
}