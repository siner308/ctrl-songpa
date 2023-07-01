type Props = {
  name: string;
}

export default function Sponsor(props: Props) {
  const {name} = props;
  return (
    <div className={"font-['CookieRun-Regular'] sponsor flex text-xl mobile:text-sm"}>{name}</div>
  )
}
