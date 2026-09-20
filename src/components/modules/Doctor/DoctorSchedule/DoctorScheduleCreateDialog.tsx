"use client"
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const DoctorScheduleCreateDialog = () => {
    const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger render={<Button size="lg" />}>
        Create Schedule
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Schedule</DialogTitle>
          <DialogDescription>
            This schedule will be visible to patient
          </DialogDescription>
        </DialogHeader>
        {/* <CreateScheduleForm /> */}
      </DialogContent>
    </Dialog>
  );
};

export default DoctorScheduleCreateDialog;
