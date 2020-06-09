<template>
  <div class="resume container">
    <h1>Resume</h1>

    <h2>Work Experience</h2>
    <Employer
      name="Garmin"
      url="https://www.garmin.com"
      :startDate="new Date('2016-01-11T12:00:00Z')"
      :endDate="false"
      title="Software Engineer"
      :tags="['JavaScript', 'Vue', 'CSS', 'SASS', 'HTML', 'Node.js', 'PHP',
        'Wordpress', 'SEO', 'Accessibility', 'Express']"
      :projects="[
        {
          title: 'Blog',
          url: 'https://www.garmin.com/en-US/blog/',
          image: 'garmin-blog.png',
        },
        {
          title: 'Support Center',
          url: 'https://support.garmin.com/en-US/',
          image: 'garmin-support-center.png',
        },
      ]"
    >
      <ul>
        <li>Project lead for the Garmin Support Center's front end</li>
        <li>Led effort to create a component library for product support applications, and worked
          with other teams to collaborate on a company-wide component library</li>
        <li>Developed complex, highly flexible applications</li>
        <li>Gathered requirements from stakeholders and implemented their
          requirements into software</li>
        <li>Performed testing of software and websites to ensure compatibility
          with various devices, browsers, and operating systems</li>
        <li>Developed custom and localized Wordpress plugins, scripts, and
          themes for the Garmin blog</li>
        <li>Ensured compliance with accessibility standards</li>
        <li>Created reusable packages to help enforce code and style consistency
          across Garmin web properties</li>
      </ul>
    </Employer>

    <Employer
      name="Lifted Logic"
      url="https://liftedlogic.com"
      :startDate="new Date('2014-09-01T12:00:00Z')"
      :endDate="new Date('2015-12-01T12:00:00Z')"
      title="Developer, Developer Supervisor"
      :tags="['Wordpress', 'JavaScript', 'CSS', 'SASS', 'HTML', 'Node.js',
        'PHP', 'SEO', 'jQuery', 'AngularJS', 'MongoDB', 'Express']"
      :projects="[
        {
          title: 'SAB Homes',
          url: 'https://sabhomes.com/',
          image: 'sab-homes-preview.jpg',
        },
        {
          title: 'Big Red Decorative Concrete',
          url: 'http://bigreddecorativeconcrete.com/',
          image: 'big-red-decorative-concrete.jpg',
        },
        {
          title: 'CottageCare',
          url: 'http://bigreddecorativeconcrete.com/',
          image: 'cottage-care-preview.jpg',
        },
        {
          title: 'Novak Birks',
          url: 'http://novakbirks.com/',
          image: 'novak-birks-preview.jpg',
        },
        {
          title: 'Rusk-Panola Transmission Project',
          url: 'http://ruskpanolatransmissionproject.com/',
          image: 'rusk-panola-preview.jpg',
        },
        {
          title: 'Tour de BBQ',
          url: 'http://tourdebbq.com/',
          image: 'tour-de-bbq-preview.jpg',
        },
        {
          title: 'Show Me KC Schools',
          url: 'http://showmekcschools.org/',
          image: 'show-me-kc-schools-preview.jpg',
        },
        {
          title: 'Midwest Land Group',
          url: 'http://midwestlandgroup.com/',
          image: 'midwest-land-group-preview.jpg',
        },
      ]"
    >
      <ul>
        <li>Supervised a team of developers to complete time-sensitive
          projects</li>
        <li>Converted web designs from PSD files to Wordpress templates using
          HTML, CSS / SASS, jQuery, and PHP</li>
        <li>Developed complex, highly flexible shopping interface for
          customizable products</li>
        <li>Gathered requirements from clients and implemented their
          requirements into software</li>
        <li>Performed testing of software and websites to ensure compatibility
          with various devices, browsers, operating systems</li>
        <li>Researched and implemented a checklist of search engine optimization
          items that all sites must meet prior to deployment</li>
        <li>Developed custom Wordpress plugins and scripts</li>
      </ul>
    </Employer>

    <Employer
      name="JNT Company, LLC"
      url="https://jntcompany.com"
      :startDate="new Date('2012-07-01T12:00:00Z')"
      :endDate="new Date('2014-09-01T12:00:00Z')"
      title="Developer"
      :tags="['CodeIgniter', 'PHP', 'CSS', 'LESS', 'JavaScript', 'jQuery', 'MySQL', 'SEO', 'HTML']"
      :projects="[
        {
          title: 'Paramour Coffee',
          url: 'https://www.paramourcoffee.com/',
          image: 'paramour-coffee-preview.jpg',
        },
        {
          title: 'The Pathfinder',
          url: 'http://www.thepathfinder.net/',
          image: 'the-pathfinder-preview.jpg',
        },
      ]"
    >
      <ul>
        <li>Converted web designs from PSD files to HTML, CSS, and jQuery
          templates, and converting into CMS templates within CodeIgniter</li>
        <li>Improved CMS modules by increasing their flexibility and redesigning
          database schemas</li>
        <li>Completed time-sensitive projects for clients using specified user
          requirements</li>
        <li>Expanded a statistics module to support Google Analytics using the
          Google Client Library for PHP, and decreased development to production
          time by moving client data from files to the database</li>
        <li>Worked with a team of developers to design an internal project
          management system for managing web site and client information and
          backups</li>
        <li>Performed demonstrations of software to clients</li>
        <li>Researched Google’s search engine optimization recommendations and
          authored a list of recommendations for internal developers and external
          clients to maximize exposure to search engines</li>
        <li>Designed and developed a tool in PHP and MySQL for checking web pages
          for search engine optimization issues to be display on a CMS dashboard</li>
        <li>Utilized Bootstrap framework to build a complete dashboard and CMS
          solution according to user specifications</li>
      </ul>
    </Employer>

    <Employer
      name="Se2, Inc."
      url="http://www.se2.com"
      :startDate="new Date('2011-06-01T12:00:00Z')"
      :endDate="new Date('2012-07-01T12:00:00Z')"
      title="Programmer Analyst"
      :tags="['ASP.NET', 'CSS', 'HTML', 'jQuery', 'JavaScript', 'Oracle', 'T-SQL', 'VB.NET']"
      :projects="false"
    >
      <ul>
        <li>Used VB.NET and T-SQL to create a batch processor of commission
          transactions</li>
        <li>Worked with another programmer to create a new web site template
          using HTML, CSS, and Javascript (jQuery)</li>
        <li>Improved existing VB.NET solutions to make them more flexible by
          making them client-independent</li>
      </ul>
    </Employer>

    <Employer
      name="KSU Housing &amp; Dining Services InfoTech"
      url="http://housing.k-state.edu"
      :startDate="new Date('2008-09-01T12:00:00Z')"
      :endDate="new Date('2011-06-01T12:00:00Z')"
      title="Developer"
      :tags="['PHP', 'CSS', 'HTML', 'JavaScript', 'MySQL', 'VBA', 'VB.NET']"
      :projects="false"
    >
      <ul>
        <li>Led a team to develop a modular applications platform</li>
        <li>Wrote and maintained applications utilized by students and staff</li>
        <li>Improved a Visual Basic application to expedite the processing of
          payroll data</li>
        <li>Programmed a PHP application that automated menu item card
          creation</li>
        <li>Worked with a team to create a PHP application that automated the
          entire application and selection process for resident and multicultural assistants</li>
      </ul>
    </Employer>

    <Employer
      name="Environmental Protection Agency Radiation and Indoor Environments National Laboratory"
      url="http://www.epa.gov"
      :startDate="new Date('2010-05-01T12:00:00Z')"
      :endDate="new Date('2010-08-01T12:00:00Z')"
      title="Intern"
      :tags="['C++']"
      :projects="false"
    >
      <ul>
        <li>Rewrote a broken C++ function that handled conversion of local
          laboratory time to Greenwich Mean Time</li>
        <li>Improved a C++ application for the Radiation Emergency Response
          Team by adding support for a USB Caberra UniSpec radiation detection device</li>
      </ul>
    </Employer>

    <Employer
      name="City of Topeka, ERP Department"
      url="http://www.topeka.org"
      :startDate="new Date('2008-05-01T12:00:00Z')"
      :endDate="new Date('2008-08-01T12:00:00Z')"
      title="Intern"
      :tags="['Oracle']"
      :projects="false"
    >
      <ul>
        <li>Performed vendor database clean up and file conversions</li>
        <li>Assisted with creating project documentation and design specifications</li>
      </ul>
    </Employer>

    <div class="education">
      <h2>Education</h2>
      <h3>
        <a href="https://www.k-state.edu" target="_blank">
          Kansas State University
        </a>
      </h3>
      <div class="education__description">
        Bachelor of Science in Information Systems, 2011
      </div>
    </div>
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

<style lang="scss" scoped>
@import '@/assets/scss';

.education {
  border-top: 5px solid $color-party-girl;
}
</style>
