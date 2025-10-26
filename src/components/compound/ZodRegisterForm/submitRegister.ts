import type { FormData } from "./registerSchema";

export async function submitRegister(data: FormData, reset: () => void) {
  await fetch("http://localhost:8080/register-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response: Response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((result) => {
      console.log("Success:", result);
      alert("Registration successful!");
      reset();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
