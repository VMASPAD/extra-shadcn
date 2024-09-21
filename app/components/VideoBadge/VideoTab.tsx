import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { codeCanvasBadge } from "../codes";
import Code from "../Code";
import VideoBadge from "./VideoBadge";
function VideoTab() {
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
        <p className="my-5">Modal Video Player</p>
        <VideoBadge modal={true} link=""/>
        <Table>
          <TableCaption>
            Just copy what is in the “Code” tab and paste it into a tsx file.
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="text-right">Props</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">link</TableCell>
              <TableCell>
              Add the video code below watch?v=
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">string</Badge>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">modal</TableCell>
              <TableCell>
              Enable or disable the modal view of the video if you want it to be a normal iframe.
              </TableCell>
              <TableCell className="text-right">
                <Badge variant="outline">boolean</Badge>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="Code">
        <Code newCode={codeCanvasBadge} styles={true} />
      </TabsContent>
    </Tabs>
  );
}

export default VideoTab;
