import React from "react";
import "./index.css";
import { ReactComponent as IconPreloader  } from "../../assets/icons/icon-preloader.svg";

type Props = {
    className?: string
}

const Preloader: React.FC<Props> = ({className= ""}) => (
    <div className={`${className} icon-preloader`}>
        <IconPreloader/>
    </div>
);

export default Preloader;