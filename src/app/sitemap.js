import { services, sealedUnitTypes } from "@/data/services";

const baseUrl = "https://glassandwindoors.co.uk";

export default function sitemap() {
  const staticRoutes = ["", "/about", "/services", "/gallery", "/contact", "/privacy-policy", "/terms-conditions", "/cookie-policy"].map(
    (path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: path === "" ? 1 : 0.7,
    })
  );

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const sealedUnitRoutes = sealedUnitTypes.map((type) => ({
    url: `${baseUrl}/services/sealed-units/${type.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...sealedUnitRoutes];
}
