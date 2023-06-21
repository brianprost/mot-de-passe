export function Toast({ message }: { message: string }) {
  return (
    <div className="toast">
      <div className="alert alert-success">{message}</div>
    </div>
  );
}
