"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

function SuccessPage() {
  const searchParams = useSearchParams();
  // const pathName = usePathname();

  // const sessionId = searchParams.get("session_id");

  // console.log(pathName);
  // console.log("Session ID:", sessionId);
  // console.log("Check", searchParams.get("check"));

  const router = useRouter();

  const subscriberEmail = searchParams.get("subscriberEmail");

  const sendEmail = async () => {
    console.log("Email:", subscriberEmail);
    if (subscriberEmail) {
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reciever: subscriberEmail }),
        });

        if (response.ok) {
          toast.success("Confirmation Email has been sent.");
          console.log("Email sent successfully");
          router.push("/");
        } else {
          console.error("Failed to send email");
        }
      } catch (error) {
        console.error("Error sending email:", error);
      }
    }
  };

  useEffect(() => {
    sendEmail();
  }, [subscriberEmail]); // Call sendEmail when subscriberEmail changes

  return (
    <div className="h-screen flex items-center flex-col justify-center">
      <p className="max-w-4xl text-center text-5xl font-bold">
        Thank you! Your purchase was successful 🎉
      </p>
      <Link className="mt-10" href="/">
        <p className="underline">Go Back</p>
      </Link>
    </div>
  );
}

export default SuccessPage;
