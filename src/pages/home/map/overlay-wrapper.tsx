import { useQuery } from "@apollo/client";
import { RegionsData } from "../../../types/map";
import { GET_REGIONS } from "../../../gql/query/map";
import React from "react";
import { toast } from "react-hot-toast";
import Overlay from "./overlay";

const OverlayWrapper: React.FC = () => {
  const { data, loading, error } = useQuery<RegionsData>(GET_REGIONS);

  if (loading) {
    return <div>slkfgjsfldkjglkdjfglkjdflgjlkdfjglkjdflkgkldf</div>;
  }

  if (error || !data) {
    toast.error(`Не удалось загрузить центры профилактики с сервера`, {
      id: "error",
    });
    return <div>slkfgjsfldkjglkdjfglkjdflgjlkdfjglkjdflkgkldf</div>;
  }

  return <Overlay regions={data.regions} />;
};

export default OverlayWrapper;
