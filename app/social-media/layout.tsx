import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Social Media Channels | CloudCom Networks",
  description: "Official update regarding CloudCom Networks social media presence. Learn about upcoming channels, verified updates, and direct contact options.",
};

export default function SocialMediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
