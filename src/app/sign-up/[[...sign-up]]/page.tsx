import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex flex-1 flex-col items-center justify-center">
        <SignUp path="/sign-up" />
      </main>
    </div>
  )
}
