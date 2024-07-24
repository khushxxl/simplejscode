"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

function SuccessPage() {
  const routerSearch = useSearchParams();
  console.log(routerSearch.get("email"));
  //   const subscriberEmail = routerSearch.get("email");
  const subscriberEmail = "khushaal.choithramani@gmail.com";

  const sendEmail = async () => {
    if (subscriberEmail) {
      try {
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            receiver: subscriberEmail, // edit the api call - default value has been sent
          }),
        });
        if (response.ok) {
          toast.success("Confirmation Email has been Sent");
          console.log("Email sent successfully");
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
  }, []);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="max-w-4xl text-center text-5xl font-bold ">
        Thank you! Your Purchase was Successful 🎉
      </p>
    </div>
  );
}

export default SuccessPage;
