import React from "react";

function NormalFunction() {
  function sayHello() {
    alert("হ্যালো, Md. Sakib! React-এ স্বাগতম!");
  }

  return (
    <div className="p-4 m-4 border rounded bg-gray-100 text-center">
      <h2 className="text-xl font-bold">React Function উদাহরণ</h2>
      <button onClick={sayHello} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click করুন 👋
      </button>
    </div>
  );
}

export default NormalFunction;