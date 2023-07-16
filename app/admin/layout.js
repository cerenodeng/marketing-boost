import AdminSidebar from '@/components/AdminSidebar';

export default function AdminLayout({ children }) {

  return (
    <div className="flex">
      <AdminSidebar />
      {children}
    </div>
  );
}