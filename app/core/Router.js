import App from '+/App'
import * as allViews from 'glob:../ui/views/**/index.js'

class Router {
  constructor() : void {
    this.views = Object.values(allViews).map(view => view)
    this.routes = {}
    this.routeConfig = { 
      path: '/',
      component: App,
      indexRoute: {},
      childRoutes: []
    }

    this.routeConfig.childRoutes = this._mapViewsToRoutes()
    this.routeConfig.indexRoute.component = this._getIndexRouteComponent()
  }

  _mapViewsToRoutes() : Object[] {
    const result = this.views.map(view => {
      const route = view.route
      this.routes[route.name] = route.path

      return {
        name: route.name,
        path: route.path,
        component: view
      }
    })
    
    return this._sortRoutes(result)
  }

  _sortRoutes(routes : Object[]) : Object[] {
    routes.sort((routeA, routeB) => {
      if(routeA.path === '*'){
        return 1
      }

      return 0
    })

    return routes
  }
 
  _getIndexRouteComponent() : Object {
    const route = this.routeConfig.childRoutes.find(r => {
      return r.name === CONFIG.INDEX_ROUTE
    })

    return route.component
  }
}

export default new Router