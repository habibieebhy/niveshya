ALTER TABLE "niveshya"."whatsapp_sessions" RENAME COLUMN "service_type" TO "flow_type";--> statement-breakpoint
ALTER TABLE "niveshya"."users" DROP CONSTRAINT "users_email_key";--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ALTER COLUMN "business_name" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ALTER COLUMN "contact_person" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ALTER COLUMN "service" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "niveshya"."users" ALTER COLUMN "role" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ADD COLUMN "lead_type" text;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ADD COLUMN "city" text;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ADD COLUMN "age_range" text;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ADD COLUMN "income_range" text;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ADD COLUMN "family_size" text;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ADD COLUMN "wealth_interest" text;--> statement-breakpoint
ALTER TABLE "niveshya"."leads" ADD COLUMN "services_requested" text;--> statement-breakpoint
ALTER TABLE "niveshya"."whatsapp_sessions" ADD COLUMN "name" text;--> statement-breakpoint
ALTER TABLE "niveshya"."whatsapp_sessions" ADD COLUMN "city" text;--> statement-breakpoint
ALTER TABLE "niveshya"."whatsapp_sessions" ADD COLUMN "age_range" text;--> statement-breakpoint
ALTER TABLE "niveshya"."whatsapp_sessions" ADD COLUMN "income_range" text;--> statement-breakpoint
ALTER TABLE "niveshya"."whatsapp_sessions" ADD COLUMN "family_size" text;--> statement-breakpoint
ALTER TABLE "niveshya"."whatsapp_sessions" ADD COLUMN "wealth_interest" text;--> statement-breakpoint
ALTER TABLE "niveshya"."whatsapp_sessions" ADD COLUMN "selected_services" text;--> statement-breakpoint
ALTER TABLE "niveshya"."users" ADD CONSTRAINT "users_email_unique" UNIQUE("email");