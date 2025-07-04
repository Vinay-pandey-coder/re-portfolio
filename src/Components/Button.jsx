import PropTypes from "prop-types"


const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-primary inline-flex items-center gap-2 ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded align-middle ml-2 text-base" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-primary inline-flex items-center gap-2 ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded align-middle ml-2 text-base" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};
ButtonPrimary.propTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}


const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={`btn btn-outline inline-flex items-center gap-2 ${classes}`}
      >
        {label}
        {icon && (
          <span className="material-symbols-rounded align-middle ml-2 text-base" aria-hidden="true">
            {icon}
          </span>
        )}
      </a>
    );
  } else {
    return (
      <button className={`btn btn-outline inline-flex items-center gap-2 ${classes}`}>
        {label}
        {icon && (
          <span className="material-symbols-rounded align-middle ml-2 text-base" aria-hidden="true">
            {icon}
          </span>
        )}
      </button>
    );
  }
};
ButtonOutline.propTypes = {
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}


export {
    ButtonPrimary,ButtonOutline
}
    