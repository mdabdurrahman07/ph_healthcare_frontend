import { getAllPublicDoctors } from "@/api/doctor/doctor.api";

export async function generateStaticParams() {
  const limit = 100;
  const first = await getAllPublicDoctors({ page: 1, limit });

  const totalPages = first.meta?.totalPages ?? 1;

  const all = [...first.data];

  for (let page = 2; page <= totalPages; page++) {
    const data = await getAllPublicDoctors({ page, limit });
    all.push(...data.data);
  }

  return all.map((doctor) => ({ id: doctor.id }));
}

const DoctorDetailsPage = () => {
  return <div></div>;
};

export default DoctorDetailsPage;
