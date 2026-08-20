export interface FormValidationReport {
    isValid: Boolean;
    errors: {
        firstName: string;
        lastName: string;
        email: string;
        feedback: string;
    }
}

export const validateContactForm = (
  firstName: string,
  lastName: string,
  email: string,
  feedback: string,
): FormValidationReport => {
  const report: FormValidationReport = {
    isValid: true,
    errors: { firstName: "", lastName: "", email: "", feedback: ""}
  };

  if (!firstName.trim()) {
    report.errors.firstName = "Please enter your first name.";
    report.isValid = false;
  }

  if (!lastName.trim()) {
    report.errors.lastName = "Please enter your last name.";
    report.isValid = false;
  }

  if (!email.trim()) {
    report.errors.email = "Please enter your email address.";
    report.isValid = false;
  } else if (!email.includes("@")) {
    report.errors.email = "Email must include the at symbol '@'.";
    report.isValid = false;
  }

  if (!feedback.trim()) {
    report.errors.feedback = "Please enter feedback.";
    report.isValid = false;
  }

  return report; 

}