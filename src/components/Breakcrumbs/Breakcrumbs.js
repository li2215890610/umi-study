import NavLink from 'umi/navlink';

import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

import  {routerBreakcrumbList} from "../../config/routerConfig";

import styles from "./Breakcrumbs.css";


// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes = [
  ...routerBreakcrumbList
];


export default withBreadcrumbs(routes)(({ breadcrumbs }) => {

  let newBreadcrumbs = [...breadcrumbs];

  delete newBreadcrumbs[1]
  delete newBreadcrumbs[0]

  // console.log(newBreadcrumbs)
  return (
    <div className={styles['breakcrumb_box']}>
      {newBreadcrumbs.map((breadcrumb, index) => (
        <span key={breadcrumb.key}>
          <NavLink to={breadcrumb.props.match.url}>
            {breadcrumb}
          </NavLink>
          {(index < newBreadcrumbs.length - 1) && <i> / </i>}
        </span>
      ))}
    </div>
  )
}
);
