type Props = {
  name: string;
}

export default function Sponsor(props: Props) {
  const {name} = props;
  return (
    <div className={"font-['CookieRun-Regular'] sponsor flex text-3xl mobile:text-2xl"}>{name}</div>
  )
}
