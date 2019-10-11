<template>
  <div class="resume container">
    <h1>Resume</h1>
    <Employer
      name="Garmin"
      url="https://www.garmin.com"
      title="Software Engineer"
      :tags="['JavaScript', 'CSS', 'SASS', 'HTML', 'Node.js', 'PHP', 'Wordpress', 'SEO', 'Accessibility', 'Express']"
    >
      <ul>
        <li>Project lead for the Garmin Support Center's front end</li>
        <li>Developed complex, highly flexible applications</li>
        <li>Gathered requirements from stakeholders and implemented their requirements into software</li>
        <li>Performed testing of software and websites to ensure compatibility with various devices, browsers, operating systems</li>
        <li>Developed custom Wordpress plugins, scripts, and themes</li>
      </ul>
    </Employer>

    <Employer
      name="Lifted Logic"
      url="https://liftedlogic.com"
      title="Developer, Developer Supervisor"
      :tags="['Wordpress', 'JavaScript', 'CSS', 'SASS', 'HTML', 'Node.js', 'PHP', 'SEO', 'jQuery', 'AngularJS', 'MongoDB', 'Express']"
    >
      <ul>
        <li>Supervised a team of developers to complete time-sensitive projects</li>
        <li>Converted web designs from PSD files to Wordpress templates using HTML, CSS / SASS, jQuery, and PHP</li>
        <li>Developed complex, highly flexible shopping interface for customizable products</li>
        <li>Gathered requirements from clients and implemented their requirements into software</li>
        <li>Performed testing of software and websites to ensure compatibility with various devices, browsers, operating systems</li>
        <li>Researched and implemented a checklist of search engine optimization items that all sites must meet prior to deployment</li>
        <li>Developed custom Wordpress plugins and scripts</li>
      </ul>
    </Employer>

    <Employer
      name="JNT Company, LLC"
      url="https://jntcompany.com"
      title="Developer"
      :tags="['CodeIgniter', 'PHP', 'CSS', 'LESS', 'JavaScript', 'jQuery', 'MySQL', 'SEO', 'HTML']"
    >
      <ul>
        <li>Converted web designs from PSD files to HTML, CSS, and jQuery templates, and converting into CMS templates within CodeIgniter</li>
        <li>Improved CMS modules by increasing their flexibility and redesigning database schemas</li>
        <li>Completed time-sensitive projects for clients using specified user requirements</li>
        <li>Expanded a statistics module to support Google Analytics using the Google Client Library for PHP, and decreased development to production time by moving client data from files to the database</li>
        <li>Worked with a team of developers to design an internal project management system for managing web site and client information and backups</li>
        <li>Performed demonstrations of software to clients</li>
        <li>Researched Google’s search engine optimization recommendations and authored a list of recommendations for internal developers and external clients to maximize exposure to search engines</li>
        <li>Designed and developed a tool in PHP and MySQL for checking web pages for search engine optimization issues to be display on a CMS dashboard</li>
        <li>Utilized Bootstrap framework to build a complete dashboard and CMS solution according to user specifications</li>
      </ul>
    </Employer>

    <Employer
      name="Se2, Inc."
      url="http://www.se2.com"
      title="Programmer Analyst"
      :tags="['ASP.NET', 'CSS', 'HTML', 'jQuery', 'JavaScript', 'Oracle', 'T-SQL', 'VB.NET']"
    >
      <ul>
        <li>Used VB.NET and T-SQL to create a batch processor of commission transactions</li>
        <li>Worked with another programmer to create a new web site template using HTML, CSS, and Javascript (jQuery)</li>
        <li>Improved existing VB.NET solutions to make them more flexible by making them client-independent</li>
      </ul>
    </Employer>

    <Employer
      name="KSU Housing &amp; Dining Services InfoTech"
      url="http://housing.k-state.edu"
      title="Developer"
      :tags="['PHP', 'CSS', 'HTML', 'JavaScript', 'MySQL', 'VBA', 'VB.NET']"
    >
      <ul>
        <li>Led a team to develop a modular applications platform</li>
        <li>Wrote and maintained applications utilized by students and staff</li>
        <li>Improved a Visual Basic application to expedite the processing of payroll data</li>
        <li>Programmed a PHP application that automated menu item card creation</li>
        <li>Worked with a team to create a PHP application that automated the entire application and selection process for resident and multicultural assistants</li>
      </ul>
    </Employer>

    <Employer
      name="Environmental Protection Agency Radiation and Indoor Environments National Laboratory"
      url="http://www.epa.gov"
      title="Intern"
      :tags="['C++']"
    >
      <ul>
        <li>Rewrote a broken C++ function that handled conversion of local laboratory time to Greenwich Mean Time</li>
        <li>Improved a C++ application for the Radiation Emergency Response Team by adding support for a USB Caberra UniSpec radiation detection device</li>
      </ul>
    </Employer>

    <Employer
      name="City of Topeka, ERP Department"
      url="http://www.topeka.org"
      title="Intern"
      :tags="['Oracle']"
    >
      <ul>
        <li>Performed vendor database clean up and file conversions</li>
        <li>Assisted with creating project documentation and design specifications</li>
      </ul>
    </Employer>
  </div>
</template>

<script>
import Employer from '@/components/employer/employer.vue';

export default {
  name: 'Resume',
  components: {
    Employer,
  },
};
</script>
