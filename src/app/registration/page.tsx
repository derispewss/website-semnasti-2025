export const metadata = {
  title: 'Registration | SEMNASTI 2025',
  description: 'Registration form for SEMNASTI 2025',
};

export default function RegistrationPage() {
  const url = 'https://tally.so/r/wkVgre';
  const title = 'SEMNASTI 2025';
  return (
    <main className="fixed inset-0 z-0">
      <iframe
        src={url}
        title={title}
        className="w-full h-full border-0"
        loading="lazy"
        allow="clipboard-write; fullscreen"
      />
    </main>
  );
}
