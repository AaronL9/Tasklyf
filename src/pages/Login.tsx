import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Login() {
  return (
    <div className="w-full max-w-[500px] justify-center">
      <h2 className="my-5 text-center font-heading text-h2 font-extra-bold">
        Login
      </h2>
      <div className="w-full rounded-md bg-white p-10 shadow-[0_0_4px_0_rgba(0,0,0,0.25)]">
        <form className="grid gap-3">
          <label className="font-md" htmlFor="email">
            Email
          </label>
          <Input id="email" type="email" />
          <label className="font-md" htmlFor="password">
            password
          </label>
          <Input id="password" type="password" />
          <button className="justify-self-end text-primary-grey">
            Forgot password?
          </button>
          <Button>Login up</Button>
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

export default Login;
