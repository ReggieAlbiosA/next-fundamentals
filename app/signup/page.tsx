import Link from "next/link";

export default function SignUp() {
  return (
      <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-semibold mb-4">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">Full Name</label>
            <input type="text" id="name" name="name" required className="w-full p-2 border rounded"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input type="email" id="email" name="email" required className="w-full p-2 border rounded"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <input type="password" id="password" name="password" required className="w-full p-2 border rounded"/>
          </div>
          <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">Sign Up</button>
        </form>
        <p className="mt-4 text-sm">
          Already have an account? <Link href="/signin" className="text-blue-500">Sign In</Link>
        </p>
      </section>
  );
}
