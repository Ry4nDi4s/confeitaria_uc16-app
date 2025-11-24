import { AuthProvider } from '@/cotexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <AuthProvider>
                    {children}
                </AuthProvider>
            </body>
        </html>
    );
}