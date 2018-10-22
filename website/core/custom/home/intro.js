const React = require('react')

const siteConfig = require('../../../siteConfig')
const device = require('../../../utils/device')
const Button = require('../button')
const Hamburmenu = require('../hamburmenu')
const Hyperlink = require('../hyperlink')

const rocket = `${siteConfig.baseUrl}img/home/rocket.svg`

module.exports = (props) => (
  <div {...props} className={`Intro ${props.className || ''}`}>
    <img src={rocket} alt="" className="_bg-rocket" />
    <div className="_start-section">
      <div className="_title">
        The best framework for GraphQL!
      </div>
      <div className="_subtitle">
        GraphQL Modules is a set of extra tools, structure and guidelines for your GraphQL server, Use it to get reusable, maintainable, testable and extendable GraphQL servers.
      </div>
      <Button className="_start-button">
        Get started
      </Button>
    </div>
  </div>
)