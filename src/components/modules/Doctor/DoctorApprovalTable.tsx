"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useSuspenseGetAllDoctors } from "@/hooks/auth";
import type { Doctor, DoctorParams } from "@/types/doctor/doctor.type";
import DoctorApprovalSheet from "./DoctorApprovalSheet";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";

interface Props extends DoctorParams {
  handleReview: Dispatch<SetStateAction<string>>
}

const DoctorApprovalTable = ({handleReview, ...params }: Props) => {
  const { data } = useSuspenseGetAllDoctors(params);
  const doctors: Doctor[] = Array.isArray(
    (data as { data?: Doctor[] } | undefined)?.data,
  )
    ? ((data as { data?: Doctor[] }).data ?? [])
    : [];

  return (
    <div className="w-full rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>License No.</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Specialization</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {doctors.map((doctor) => (
            <TableRow key={doctor.id}>
              <TableCell>{doctor.name}</TableCell>
              <TableCell>{doctor.licenseNumber ?? "-"}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>{doctor.contactNumber ?? "-"}</TableCell>
              <TableCell>
                {doctor.specialization ? doctor.specialization : "-"}
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" onClick={() => handleReview(doctor.id)}>Review</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorApprovalTable;
