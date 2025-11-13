export const metadata = {
  title: 'Registration | SEMNASTI X AORUS INDONESIA',
  description: 'Registration form for SEMNASTI X AORUS INDONESIA',
};

export default function RegistrationPage() {
  const url = 'https://tally.so/r/wkVgre';
  const title = 'SEMNASTI X AORUS INDONESIA Registration Form';
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
