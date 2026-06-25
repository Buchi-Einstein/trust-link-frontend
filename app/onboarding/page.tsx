import { Suspense } from "react";
import VendorOnboardingWizard from "@/components/onboarding/VendorOnboardingWizard";

export default function OnboardingPage() {
  return (
    <Suspense fallback={null}>
      <VendorOnboardingWizard />
    </Suspense>
  );
}
