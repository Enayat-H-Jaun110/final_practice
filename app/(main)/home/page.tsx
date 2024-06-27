"use client"
import { Button } from "@/components/ui/button";
import { useCallback, useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MyForm } from "@/components/form/myForm";
import { DeleteLorem } from "@/actions/deleteLorem";
import { getlorem } from "@/actions/getLorem";

const HomePage = () => {
  const [userInfo, setLorems] = useState<any>([]);

  useEffect(() => {
    getlorem().then((data: any) => {
      setLorems(data);
      console.log(data);
    });
  }, []);

  const handleDelete = useCallback((id: string) => {
    DeleteLorem(id);
  }, []);

  return (
    <main className="h-screen bg-yellow-200 gap-y-4">
      <div className="flex flex-col justify-center items-center gap-y-[50px]">
        <div className="grid grid-cols-3 grid-rows-1 gap-[50px] mt-5">
          <div className="flex flex-col justify-center items-center border border-black bg-green-200 w-[300px]">
            <div>Lorem, ipsum.</div>
            <div className="text-6xl">03</div>
          </div>
          <div className="flex flex-col justify-center items-center border border-black bg-red-200 w-[300px]">
            <div>Lorem, ipsum.</div>
            <div className="text-6xl">11</div>
          </div>
          <div className="flex flex-col justify-center items-center border border-black bg-orange-200 w-[300px]">
            <div>Lorem, ipsum.</div>
            <div className="text-6xl">52</div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <MyForm />
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center mt-4">
        {userInfo?.map((user: any) => (
          <Card className="w-[500px] h-[200px]" key={user.id}>
            <CardHeader className="gap-6">
              <CardTitle className="flex">
                {user.name}
                <Button variant="link" size="lg" onClick={() => handleDelete(user.id)}>
                  <MdDelete size="lg" />
                </Button>
              </CardTitle>
              <CardDescription>
                <Button variant="destructive">
                  click me
                </Button>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
