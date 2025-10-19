"use client";
import Link from "next/link";
import Image from "next/image";

type ButtonProps = {
  type?: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  href?: string;
};

export default function Button({
  type = "button",
  title,
  icon,
  variant,
  full,
  href,
}: ButtonProps) {
  const classes = `flexCenter gap-3 rounded-full border ${variant} ${
    full ? "w-full" : ""
  }`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon && <Image src={icon} alt="" width={24} height={24} />}
        <span className="bold-16 whitespace-nowrap">{title}</span>
      </Link>
    );
  }

  return (
    <button type={type} className={classes}>
      {icon && <Image src={icon} alt="" width={24} height={24} />}
      <span className="bold-16 whitespace-nowrap">{title}</span>
    </button>
  );
}
