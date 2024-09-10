import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CodeBadge from "./CodeBadge";
import Code from "../Code";
import { codeCodeBadge } from "../codes";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";
  
function CodeBadgeTab() {
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
          <p className="my-5">Component to display short code.</p>
          <CodeBadge iconCopy={true}>
            {`npx shadcn@latest add table`}
          </CodeBadge>
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
      <TableCell className="font-medium">iconCopy</TableCell>
      <TableCell>Enables or disables the icon for copying the element into the code component.</TableCell> 
      <TableCell className="text-right"><Badge variant="outline">boolean</Badge></TableCell>
    </TableRow>
  </TableBody>
</Table>

        </TabsContent>
        <TabsContent value="Code">
          <Code newCode={codeCodeBadge} styles={true} />
        </TabsContent>
      </Tabs>
  );
}

export default CodeBadgeTab;
