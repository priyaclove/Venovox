// intelligenceData.ts
import { ReactNode } from 'react';

export interface ServiceItem {
  title: string;
  icon: ReactNode; // This will be populated in the component
}

export interface IntelligenceContent {
  title: string;
  paragraphs: string[];
  offerTitle: string;
  services: ServiceItem[];
}

// This is a template for the data structure
// The actual icons will be added in the component
export const intelligenceDataTemplate = {
  title: "Due Diligence",
  paragraphs: [
    "Due diligence is a critical yet often overlooked aspect of risk management in the corporate world. Its poor execution can be attributed to a variety of reasons. Firstly, businesses or investors sometimes fail to recognize the importance of due diligence. Furthermore, inappropriate parties may be appointed to conduct and oversee the process.",
    "To ensure the efficacy of due diligence, it is crucial to appoint capable analysts who can research and map out a company's holding structures, especially in the USA and Asia Pacific. This can uncover shell companies or previously undisclosed links to related or dubious third parties.",
    "Reputational due diligence is equally important, as it helps identify any material legal proceedings, corrupt business practices, or personal controversies involving key stakeholders. Operational financial due diligence, on the other hand, verifies the authenticity of accounts, audited or otherwise, and assesses the feasibility of a specific business to remain viable in the long term. Our assessment team examines off-balance-sheet risk, accounting standards and methodologies applied by auditors, and other factors such as political, environmental, and geographical risks that can impact a target company's stability."
  ],
  offerTitle: "What We Offer?",
  services: [
    { title: "Research Into Company Structure Ownership", iconType: "Database" },
    { title: "Compliance, Litigation and Regulatory Checks", iconType: "AlertCircle" },
    { title: "Financial & Political Risk Analysis Assessment", iconType: "FileCog" },
    { title: "Site Inspections and Audit", iconType: "FileSearch" },
    { title: "Vendor and Customer Interviews", iconType: "Users" },
    { title: "Profiling of Company Principles and Major Shareholders", iconType: "Building" }
  ]
};

export const riskAuditDataTemplate = {
  title: "Risk & Audit",
  paragraphs: [
    "Effective risk management is a complex and often overlooked aspect of business across all industry sectors. The importance of risk management has been underscored by the 2018 investment scandal in Malaysia, which exposed the woeful incompetence of boards and senior managers in leading financial institutions.",
    "It is important to note that risk is an essential and positive component of business, as taking risks is necessary for making profits. The key to success lies in effectively managing these risks.",
    "Risk management is an ongoing process, and many businesses fail because there is a lack of appropriate skills and knowledge to do it effectively. To address this, our firm uses the latest intelligence-led data analysis, big data, and visual mapping tools to identify and present key risk issues using powerful visualization techniques."
  ],
  offerTitle: "What We Offer?",
  services: [
    { title: "Financial Stress Testing", iconType: "Activity" },
    { title: "Business Recovery", iconType: "TrendingUp" },
    { title: "Strategic Risk Planning", iconType: "Target" },
    { title: "Market Risk Assessment", iconType: "PieChart" },
    { title: "Business Continuity Planning", iconType: "Repeat" },
    { title: "Enterprise Risk Assessment", iconType: "ClipboardCheck" }
  ]
};

export const complianceDataTemplate = {
  title: "Compliance",
  paragraphs: [
    "For many businesses, compliance has been an afterthought in their overall risk management strategy. The aftermath of the 2007/8 financial crisis has led to a significant growth in the compliance sector, particularly in the financial industry, as businesses attempt to comply with new regulatory requirements.",
    "Despite claims of putting their houses in order, many businesses continue to face compliance crises. Our experience suggests that one of the core causes of it, which is beyond compliance, is a company being out of touch with their business's \"engine rooms.\"",
    "At Venovox, we work closely with the legal sector and government regulatory agencies to stay abreast of current and upcoming legislation. Our operational focus includes helping businesses implement robust anti-money laundering (AML) programs and other compliance programs that address global and local regulatory controls, such as banking secrecy, personal and corporate data protection, and privacy laws."
  ],
  offerTitle: "What We Offer?",
  services: [
    { title: "Business Monitoring", iconType: "Monitor" },
    { title: "AML Investigation", iconType: "SearchCheck" },
    { title: "Internal Audit and Control Reviews", iconType: "ClipboardList" },
    { title: "Outsourced Compliance and Regulatory Checks", iconType: "FileCheck" },
    { title: "Regulatory Authority Liaison", iconType: "Handshake" },
    { title: "Compliance Program Design", iconType: "Settings" }
  ]
};

export const ipDataTemplate = {
  title: "Intellectual Property",
  paragraphs: [
    "The protection of intellectual property (IP) is crucial for any business to ensure its continued success. Over the last few decades, IP violations have grown from a localized issue to a multibillion-dollar market run by sophisticated criminal organizations.",
    "However, implementing and maintaining the right strategy for IP protection can be a daunting task for many businesses. At Venovox, we have worked with clients from various business sectors to develop effective strategies and implement them successfully. Our senior IP consultants have drawn from both past successes and failures to keep us ahead of the curve.",
    "We maintain excellent relationships with enforcement agencies, such as the police and customs, as well as specialized government departments in trading standards, health, food safety, and other relevant fields."
  ],
  offerTitle: "What We Offer?",
  services: [
    { title: "IP Protection Program Designing", iconType: "ShieldCheck" },
    { title: "Parallel Import Detection", iconType: "Locate" },
    { title: "IP Infringement Investigations", iconType: "Search" },
    { title: "E-Commerce IP Infringement Monitoring", iconType: "ShoppingCart" },
    { title: "Enforcement Action", iconType: "Gavel" },
    { title: "Case Management", iconType: "FolderKanban" }
  ]
};

export const tscmDataTemplate = {
  title: "Counter Measures",
  paragraphs: [
    "Technical Surveillance Counter Measures (TSCM) may sound like technical jargon, but when you look at it through a lay person's lens, it simply is just bug detection! That’s right, WE DO NOT BUG; WE ONLY DEBUG.",
    "TSCM is the original term used by the US Federal Government and refers to the process of bug sweeping or electronic counter-surveillance. Its purpose is to identify the presence of technical surveillance devices and vulnerabilities in order to prevent unauthorized access.",
    "Venovox has over a decade of experience in this industry, and we are frequently approached by multinational companies to detect electronic devices or \"bugs\" in various locations for a variety of reasons. Our surveillance team uses cutting-edge technology to thoroughly sweep the desired areas and eliminate any electronic surveillance devices that may be present. Our TSCM solution is designed to protect confidential information from being compromised by employees, competitors, criminals, or even terrorists."
  ],
  offerTitle: "The Role of Technical Surveillance Countermeasure (TSCM)",
  services: [
    { title: "To examine new and existing premises, offices or facilities, before a company moves or relocates its business.", iconType: "MapPin" },
    { title: "To examine public places for any public events held (such as hotel rooms or conference rooms).", iconType: "CalendarRange" },
    { title: "To examine Board Rooms before Executive Board Meetings are held.", iconType: "Building2" }
  ]
};

export const financialCrimeDataTemplate = {
  title: "Financial Crime",
  paragraphs: [
    "Financial crime has become a global multibillion-dollar phenomenon that evolves at a faster pace than governments, legislators, businesses, and enforcement agencies can keep up with.",
    "The term \"financial crime\" encompasses a range of criminal activities such as theft, fraud, counterfeiting, forgery, tax evasion, insider trading (securities fraud), bribery, blackmail, extortion, and money laundering.",
    "While the legal fundamentals of financial crime have not changed, the methods used by criminal organizations have. The rise of e-commerce, electronic banking, and trading has made financial crime prevention and detection more complicated than it was a decade or so ago.",
    "It's worth noting that businesses are also vulnerable to financial crimes perpetrated by their own employees. These crimes are commonly carried out by rogue employees or entire departments running scams due to inadequate internal compliance controls and tax audits.",
    "Government corruption, particularly in emerging markets, is another significant source of financial crime. These types of crimes are usually complicated and require delicate and professional management to mitigate brand integrity risks and prevent substantial financial losses.",
    "Venovox has assembled a world-class team of seasoned financial crime investigators and senior case managers capable of handling all types of financial crime. Our team works closely with enforcement agencies and financial regulators worldwide, as well as with our clients."
  ],
  offerTitle: "What We Offer?",
  services: [
    { title: "Fraud Detection", iconType: "ShieldAlert" },
    { title: "Asset Tracing", iconType: "SearchDollar" },
    { title: "Forensic Audits", iconType: "FileSignature" },
    { title: "Litigation Support", iconType: "Scale" },
    { title: "Complex Financial Investigations", iconType: "BriefcaseSearch" },
    { title: "Case Management", iconType: "FolderKanban" }
  ]
};
