import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  ApproveDoctorPayload,
  Doctor,
  DoctorParams,
} from "@/types/doctor/doctor.type";
import { useApproveDoctor, useGetAllDoctors } from "@/hooks/auth";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

interface Props extends DoctorParams {
  selectedId: string;
  onClose: () => void;
}

const DoctorApprovalSheet = ({ selectedId, onClose, ...params }: Props) => {
  const [confirmRejection, setConfirmRejection] = useState(false);
  const [rejectionReason, setRejectionReason] = useState("");
  const { data } = useGetAllDoctors(params);
  const { mutate: verify, isPending } = useApproveDoctor();
  const selectedDoctor = data?.data?.find(
    (doctor: Doctor) => doctor.id === selectedId,
  );
  const handleClose = () => {
    setConfirmRejection(false);
    setRejectionReason("");
    onClose();
  };
  const handleReviewAction = (status: "APPROVED" | "REJECTED") => {
    const reviewData: ApproveDoctorPayload = {
      doctorId: selectedId,
      verificationStatus: status,
      rejectionReason: rejectionReason,
    };
    verify(reviewData, {
      onSuccess: (res) => {
        console.log("success", res);
        handleClose();
      },
      onError: (err) => {
        console.log("Error", err);
      },
    });
  };
  if (!selectedDoctor) {
    return null;
  }
  return (
    <Sheet open={!!selectedId} onOpenChange={() => onClose()}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Review and take action</SheetTitle>
          <SheetDescription>This action cannot be undone.</SheetDescription>
        </SheetHeader>
        Doctor Name: {selectedDoctor.name}
        <SheetFooter>
          {confirmRejection ? (
            <div className="flex flex-col gap-3">
              <Textarea
                value={rejectionReason}
                onChange={(e) => setRejectionReason(e.target.value)}
              />
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={handleClose}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => handleReviewAction("REJECTED")}
                  className="flex-1"
                  disabled={!rejectionReason}
                >
                  Confirm Rejection
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex gap-2">
              <Button
                variant="destructive"
                size="lg"
                className="flex-1"
                onClick={() => setConfirmRejection(true)}
              >
                Reject
              </Button>
              <Button
                onClick={() => handleReviewAction("APPROVED")}
                variant="default"
                size="lg"
                className="flex-1"
              >
                Approve
              </Button>
            </div>
          )}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DoctorApprovalSheet;
