import {useRouter} from "next/router";

const ActiveLink = ({href, children}) => {
  const router = useRouter();
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };

  const isCurrentPath = router.pathname === href;

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{color: isCurrentPath ? "#735CDD" : "#8A878E"}}
    >
      {children}
    </a>
  );
};

export default ActiveLink;
