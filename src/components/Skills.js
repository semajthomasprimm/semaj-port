import React from 'react'

import {ReactComponent as HTMLLogo} from '../assets/logos/html-5.svg';
import {ReactComponent as CSSLogo} from '../assets/logos/css-3.svg';
import {ReactComponent as JSLogo} from '../assets/logos/javascript.svg';
import {ReactComponent as NodeJSLogo} from '../assets/logos/nodejs.svg';
import {ReactComponent as ReactJSLogo} from '../assets/logos/react.svg';
import {ReactComponent as BootstrapLogo} from '../assets/logos/bootstrap.svg';
import {ReactComponent as JavaLogo} from '../assets/logos/java.svg';
import {ReactComponent as CLogo} from '../assets/logos/c.svg';
import {ReactComponent as CSharpLogo} from '../assets/logos/c-sharp.svg';
import {ReactComponent as PythonLogo} from '../assets/logos/python.svg';
import {ReactComponent as PostgresLogo} from '../assets/logos/postgresql.svg';
import {ReactComponent as MySQLLogo} from '../assets/logos/mysql.svg';
import {ReactComponent as FirebaseLogo} from '../assets/logos/firebase.svg';
import {ReactComponent as GitLogo} from '../assets/logos/git.svg';
import {ReactComponent as SpringbootLogo} from '../assets/logos/spring.svg';
import {ReactComponent as NetlifyLogo} from '../assets/logos/netlify.svg';
import {ReactComponent as AndroidLogo} from '../assets/logos/android-icon.svg';
import {ReactComponent as GoogleMapsLogo} from '../assets/logos/google-maps.svg';


const Skills = () => {
    return (
        <div className="flex flex-row flex-wrap">
          <HTMLLogo width={50} height={50} className="mr-6"/>
          <CSSLogo width={50} height={50} className="mr-6"/>
          <JSLogo width={45} height={45} className="mr-6 mt-1"/>
          <NodeJSLogo width={50} height={50} className="mr-6 mt-1"/>
          <ReactJSLogo width={50} height={50} className="mr-6 mt-1"/>
          <BootstrapLogo width={50} height={50} className="mr-6 mt-1"/>
          <JavaLogo width={50} height={50} className="mr-6 mt-1"/>
          <CLogo width={50} height={50} className="mr-6 mt-1"/>
          <CSharpLogo width={50} height={50} className="mr-6 mt-1"/>
          <PythonLogo width={50} height={50} className="mr-6 mt-1"/>
          <PostgresLogo width={50} height={50} className="mr-6 mt-1"/>
          <MySQLLogo width={50} height={50} className="mr-6 mt-1"/>
          <FirebaseLogo width={50} height={50} className="mr-6 mt-1"/>
          <GitLogo width={50} height={50} className="mr-6 mt-1"/>
          <SpringbootLogo width={60} height={60} className="mr-6 mt-0"/>
          <NetlifyLogo width={50} height={50} className="mr-6 mt-1"/>
          <AndroidLogo width={50} height={50} className="mr-6 mt-1"/>
          <GoogleMapsLogo width={50} height={50} className="mr-6 mt-1"/>
        </div>
    )
}

export default Skills
