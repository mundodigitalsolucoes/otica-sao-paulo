declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function trackEvent(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

export function trackWhatsAppClick(label: string, location: string) {
  trackEvent("click_whatsapp", { click_label: label, click_location: location });
}

export function trackPhoneClick(location: string) {
  trackEvent("click_phone", { click_location: location });
}

export function trackMapClick(location: string) {
  trackEvent("click_map", { click_location: location });
}

export function trackReviewClick(action: "view_more" | "write_review", location: string) {
  trackEvent(action === "write_review" ? "click_write_review" : "click_more_reviews", {
    click_location: location,
  });
}

export function trackWidgetShortcut(label: string) {
  trackEvent("click_widget_shortcut", { shortcut_label: label });
}

export function trackScrollDepth(depth: 50 | 90, pathname: string) {
  trackEvent(depth === 50 ? "scroll_50" : "scroll_90", { page_path: pathname, scroll_depth: depth });
}

export function trackPageView(pathname: string) {
  let pageType = "institutional";
  if (pathname === "/") pageType = "home";
  else if (pathname.startsWith("/blog/")) pageType = "blog_post";
  else if (pathname === "/blog") pageType = "blog_index";
  else if (pathname === "/contato") pageType = "contact";
  else if (["/oculos-de-grau", "/oculos-de-sol", "/lentes-de-contato"].includes(pathname)) pageType = "service";

  trackEvent("page_view", {
    page_path: pathname,
    page_location: typeof window !== "undefined" ? window.location.href : pathname,
    page_type: pageType,
  });
}
