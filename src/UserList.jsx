import axios from "axios";
import { useEffect, useState } from "react";

function GetUsers() {
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    const allUsers = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUSer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    allUsers();
  }, []);

  console.log(listOfUSer);

  return (
    <>
      {listOfUSer.map((item) => {
        return (
          <div
            key={item.id}
            className="grid border shadow-md shadow-yellow-600 p-4 w-[300px] md:w-[600px] mx-auto gap-3 my-4"
          >
            <h1 className="flex justify-between">
              <span className="font-bold text-gray-800">Name :</span>{" "}
              <span className="mx-auto">{item.name}</span>
            </h1>
            <h1 className="flex justify-between">
              <span className="font-bold text-gray-800">Username :</span>{" "}
              <span className="mx-auto">{item.username}</span>
            </h1>
            <h1 className="flex justify-between">
              <span className="font-bold text-gray-800">Email :</span>{" "}
              <span className="mx-auto">{item.email}</span>
            </h1>
            <h1 className="flex justify-between">
              <span className="font-bold text-gray-800">Phone :</span>{" "}
              <span className="mx-auto">{item.phone}</span>
            </h1>
            <h1 className="flex justify-between">
              <span className="font-bold text-gray-800">Website :</span>{" "}
              <span className="mx-auto">{item.website}</span>
            </h1>
          </div>
        );
      })}
    </>
  );
}

export default GetUsers;
