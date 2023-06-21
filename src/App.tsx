import { useState } from "react";
import { Toast } from "./Toast";
import accounts from "../accounts.json";


function App() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  function buttonClick(field: string, value: string) {
    navigator.clipboard.writeText(value);
    setToastMessage(`Copied ${field} to clipboard`);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center gap-8">
          {accounts.map((account) => (
            <div
              className="card w-96 bg-base-200 text-neutral-content"
              key={account.displayName}
            >
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl">{account.displayName}</h2>
                <p className="my-5">{account.email}</p>
                <div className="card-actions justify-end">
                  <button
                    className="btn btn-primary"
                    onClick={() => buttonClick("email", account.email)}
                  >
                    Copy Email
                  </button>
                  <button
                    className="btn btn-accent"
                    onClick={() => buttonClick("password", account.password)}
                  >
                    Copy Password
                  </button>
                </div>
              </div>
            </div>
          ))}
        </main>
        {showToast && (
          <div className="fixed bottom-0 right-0 p-8">
            <Toast message={toastMessage} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
