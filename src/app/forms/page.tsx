import AppFooter from "../ui/AppFooter";
import AppNavbar from "../ui/AppNavbar";
import FormView from "./ui/FormView";

export default async function Forms() {

    return (
      <>
      <section>
        <AppNavbar />
      </section>

      <section className="py-16 px-4 md:px-16">
        <FormView />
      </section>

      <section>
      <AppFooter />
      </section>
      </>
    );
  }
