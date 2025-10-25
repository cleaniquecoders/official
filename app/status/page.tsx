"use client"

import { useState, useEffect } from "react"
import { Activity, CheckCircle, AlertTriangle, XCircle, Clock, TrendingUp, Server, Database, Globe, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ServiceStatus {
  name: string
  status: "operational" | "degraded" | "outage" | "maintenance"
  description: string
  uptime: string
  responseTime: string
  lastChecked: string
}

interface Incident {
  id: string
  title: string
  status: "investigating" | "identified" | "monitoring" | "resolved"
  impact: "minor" | "major" | "critical"
  created: string
  updated: string
  description: string
}

const services: ServiceStatus[] = [
  {
    name: "Website",
    status: "operational",
    description: "Main website and portfolio",
    uptime: "99.98%",
    responseTime: "245ms",
    lastChecked: "2 minutes ago"
  },
  {
    name: "Email Services",
    status: "operational",
    description: "Contact and communication systems",
    uptime: "99.95%",
    responseTime: "156ms",
    lastChecked: "1 minute ago"
  },
  {
    name: "GitHub Repositories",
    status: "operational",
    description: "Open source packages and repositories",
    uptime: "99.99%",
    responseTime: "89ms",
    lastChecked: "30 seconds ago"
  },
  {
    name: "Documentation",
    status: "operational",
    description: "Documentation and help resources",
    uptime: "99.97%",
    responseTime: "198ms",
    lastChecked: "1 minute ago"
  }
]

const recentIncidents: Incident[] = [
  {
    id: "inc-2024-001",
    title: "Scheduled Maintenance - Server Updates",
    status: "resolved",
    impact: "minor",
    created: "2024-10-20T02:00:00Z",
    updated: "2024-10-20T04:30:00Z",
    description: "Scheduled maintenance window for server security updates. All services were restored ahead of schedule."
  }
]

const getStatusColor = (status: ServiceStatus['status']) => {
  switch (status) {
    case "operational":
      return "text-green-500"
    case "degraded":
      return "text-yellow-500"
    case "outage":
      return "text-red-500"
    case "maintenance":
      return "text-blue-500"
    default:
      return "text-gray-500"
  }
}

const getStatusIcon = (status: ServiceStatus['status']) => {
  switch (status) {
    case "operational":
      return CheckCircle
    case "degraded":
      return AlertTriangle
    case "outage":
      return XCircle
    case "maintenance":
      return Clock
    default:
      return Activity
  }
}

const getStatusBadge = (status: ServiceStatus['status']) => {
  switch (status) {
    case "operational":
      return <Badge className="bg-green-100 text-green-800 border-green-200">Operational</Badge>
    case "degraded":
      return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Degraded</Badge>
    case "outage":
      return <Badge className="bg-red-100 text-red-800 border-red-200">Outage</Badge>
    case "maintenance":
      return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Maintenance</Badge>
    default:
      return <Badge variant="secondary">Unknown</Badge>
  }
}

const getIncidentBadge = (impact: Incident['impact']) => {
  switch (impact) {
    case "minor":
      return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Minor</Badge>
    case "major":
      return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Major</Badge>
    case "critical":
      return <Badge className="bg-red-100 text-red-800 border-red-200">Critical</Badge>
    default:
      return <Badge variant="secondary">Unknown</Badge>
  }
}

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleString()
}

export default function SystemStatus() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const overallStatus = services.every(service => service.status === "operational") ? "operational" : "issues"

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-linear-to-br from-primary/5 to-primary/10 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 backdrop-blur-sm border border-border rounded-full mb-6">
              <Activity className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">System Status</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Service{" "}
              <span className="text-primary">Status</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Real-time status and performance metrics for all Cleanique Coders services and infrastructure.
            </p>

            {/* Overall Status */}
            <div className="max-w-md mx-auto">
              <div className={`p-6 border-2 rounded-3xl bg-background/50 backdrop-blur-sm ${overallStatus === "operational" ? "border-green-200" : "border-yellow-200"}`}>
                <div className="flex items-center justify-center gap-3">
                  {overallStatus === "operational" ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <AlertTriangle className="w-6 h-6 text-yellow-500" />
                  )}
                  <span className="text-lg font-semibold text-foreground">
                    {overallStatus === "operational" ? "All Systems Operational" : "Some Issues Detected"}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  Last updated: {currentTime.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Current Status */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Current Status</h2>
          <div className="grid gap-4">
            {services.map((service, index) => {
              const StatusIcon = getStatusIcon(service.status)
              return (
                <div key={index} className="group p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center group-hover:border-primary/30 transition-colors`}>
                        <StatusIcon className={`w-5 h-5 ${getStatusColor(service.status)}`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Uptime</div>
                        <div className="font-medium text-foreground">{service.uptime}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Response</div>
                        <div className="font-medium text-foreground">{service.responseTime}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">Last Checked</div>
                        <div className="font-medium text-foreground">{service.lastChecked}</div>
                      </div>
                      {getStatusBadge(service.status)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">99.98%</div>
                <div className="text-sm text-muted-foreground">Overall Uptime</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">172ms</div>
                <div className="text-sm text-muted-foreground">Avg Response</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center">
                <Server className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">4</div>
                <div className="text-sm text-muted-foreground">Services</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                <Clock className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">0</div>
                <div className="text-sm text-muted-foreground">Active Incidents</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Incidents */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8">Recent Incidents</h2>
          {recentIncidents.length > 0 ? (
            <div className="space-y-4">
              {recentIncidents.map((incident) => (
                <div key={incident.id} className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{incident.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        Created: {formatDate(incident.created)} • Updated: {formatDate(incident.updated)}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {getIncidentBadge(incident.impact)}
                      <Badge variant={incident.status === "resolved" ? "default" : "secondary"}>
                        {incident.status.charAt(0).toUpperCase() + incident.status.slice(1)}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{incident.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-2xl text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">No Recent Incidents</h3>
              <p className="text-muted-foreground">All systems are running smoothly with no reported issues in the past 30 days.</p>
            </div>
          )}
        </div>

        {/* Subscribe to Updates */}
        <div className="text-center">
          <div className="p-8 bg-background/50 backdrop-blur-sm border border-border rounded-3xl">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-primary/10 rounded-3xl" />
            <div className="relative">
              <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Want to receive notifications about service status updates and scheduled maintenance? Contact us to subscribe to status updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:hello@cleaniquecoders.com?subject=Status%20Updates%20Subscription&body=Hi%20Cleanique%20Coders%20team%2C%0A%0AI%20would%20like%20to%20subscribe%20to%20service%20status%20updates%20and%20maintenance%20notifications.%0A%0AThank%20you%21"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe to Updates
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
