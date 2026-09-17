"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DoctorApprovalSheet from "./DoctorApprovalSheet";
import { useGetAllDoctors, useSuspenseGetAllDoctors } from "@/hooks/auth";

const DoctorApprovalTable = () => {
  const { data } = useSuspenseGetAllDoctors();
  const doctors = data?.data

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
              <TableCell>{doctor.licenseNumber}</TableCell>
              <TableCell>{doctor.email}</TableCell>
              <TableCell>{doctor.contactNumber}</TableCell>
              <TableCell>
                {doctor.specialization ? doctor.specialization : "-"}
              </TableCell>
              <TableCell className="text-right">
                <DoctorApprovalSheet />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DoctorApprovalTable;
