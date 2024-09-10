"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Code from "../Code";
import { codeNavBar } from "../codes";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import NavBar from "./NavBar";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

function NavBarTab() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [postitionTiype, setPostitionTiype] = useState("bottom");
  const handleClick = () => {
    setShowNavBar(!showNavBar);
  };
  return (
    <Tabs
      defaultValue="Info"
      className="flex flex-col mt-10 w-[-webkit-fill-available]"
    >
      <TabsList>
        <TabsTrigger value="Info">Info</TabsTrigger>
        <TabsTrigger value="Code">Code</TabsTrigger>
      </TabsList>
      <TabsContent value="Info">
        <p className="my-5">
          A stylish island taskbar with fade in and Smooth animations
        </p>
        <section className="flex flex-row gap-4">
          <Button onClick={() => setPostitionTiype("top")}>Top</Button>
          <Button onClick={() => setPostitionTiype("bottom")}>Bottom</Button>
          <Button onClick={() => setPostitionTiype("left")}>Left</Button>
          <Button onClick={() => setPostitionTiype("right")}>Right</Button>

          <Button onClick={handleClick}>
            {showNavBar ? "Hide NavBar" : "Show NavBar"}
          </Button>
          {showNavBar && (
            <NavBar
              size={"lg"}
              distance={70}
              variant={"default"}
              position={postitionTiype}
            >
              Soy Una Barra
            </NavBar>
          )}
        </section>
        <Table>
          <TableCaption>Just copy what is in the “Code” tab and paste it into a tsx file.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Props</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">distance</TableCell>
              <TableCell>Coverage area to call the component</TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">number</Badge>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">variant</TableCell>
              <TableCell>
                Style that follows the global rules of your shadcn
                configuration.
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">
                  default | destructive | ghost | link | outline | secondary
                </Badge>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">children</TableCell>
              <TableCell>
              The components you want to display
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">
                  any component
                </Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">position</TableCell>
              <TableCell>
                Define on which side of the screen you want the component to be
                displayed.
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">top | bottom | left | right</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="Code">
        <Code styles={true} newCode={codeNavBar} />
      </TabsContent>
    </Tabs>
  );
}

export default NavBarTab;
