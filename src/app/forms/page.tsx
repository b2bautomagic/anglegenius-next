import AppFooter from "../ui/AppFooter";
import AppNavbar from "../ui/AppNavbar";
import FormContainer from "./ui/FormContainer";

export default function Forms() {
    return (
      <>
      <section>
        <AppNavbar />
      </section>

      <section className="py-16 px-4 md:px-16">
        <FormContainer />
      </section>

      <section>
      <AppFooter />
      </section>
      </>
    );
  }
