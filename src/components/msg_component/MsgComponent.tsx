type Props = {
  message: any;
  className: string;
}

export default function MsgComponent({message, className}: Props) {
  return (
    <div>
      {message && (
        <div className={className}>
          {message}
        </div>
      )}
    </div>
  )
}
