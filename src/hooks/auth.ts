import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useAuth = () => {
  // @ts-ignore
  const user = useSelector(({ auth }) => auth.user);
  const router = useHistory();
  useEffect(() => {
    if (!user) router.replace("/auth/login");
  }, [user, router]);
};

export const useAdmin = () => {
  // @ts-ignore
  const user = useSelector(({ auth }) => auth.user);
  const router = useHistory();
  useEffect(() => {
    if (!user?.admin) router.replace("/");
  }, [user, router]);
};
