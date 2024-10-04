import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Register() {
  return (
    <div className="w-full max-w-[500px] justify-center">
      <h2 className="my-5 text-center font-heading text-h2 font-extra-bold">
        Create your account
      </h2>
      <div className="w-full rounded-md bg-white p-10 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]">
        <form className="grid gap-3">
          <fieldset className="grid grid-cols-2 grid-rows-2 gap-x-6">
            <label className="font-md" htmlFor="first-name">
              First Name
            </label>
            <Input
              className="col-start-1 row-start-2"
              id="first-name"
              type="text"
            />
            <label className="font-md" htmlFor="last-name">
              Last Name
            </label>
            <Input id="last-name" type="text" />
          </fieldset>

          <label className="font-md" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" />
          <label className="font-md" htmlFor="password">
            password
          </label>
          <Input id="password" type="password" />
          <Button>Sign up</Button>
        </form>
        <section className="my-10 flex w-full items-center justify-between gap-4">
          <div className="w-full border-t border-secondary-grey"></div>
          <p className="text-secondary-grey">OR</p>
          <div className="w-full border-t border-secondary-grey"></div>
        </section>
        <div className="mb-4 flex items-center justify-center gap-2 rounded-md border border-secondary-grey py-2 hover:cursor-pointer">
          <img src="/google.svg" />
          <p className="font-md">Continue with google</p>
        </div>
        <div className="flex items-center justify-center gap-2 rounded-md border border-secondary-grey py-2 hover:cursor-pointer">
          <img src="/facebook.svg" />
          <p className="font-md">Continue with facebook</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
