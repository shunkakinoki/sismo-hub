import {
  hydraS1SimpleAttester,
  hydraS1SimpleBadges,
} from "@attestations-collections/playground/polygon/hydra-s1-simple";
import { pythia1SimpleBadges } from "@attestations-collections/playground/polygon/pythia-1-simple";
import { Network } from "topics/attester";
import { Flow } from "topics/flow";

export const playgroundFlows: Flow[] = [
  {
    path: "ethereum-power-users",
    attester: hydraS1SimpleAttester.name,
    network: Network.Polygon,
    attesterType: "hydra-s1",
    badgesCollection: hydraS1SimpleBadges,
    badgesInternalCollectionsIds: [4],
    title: "",
    logoUrl: null,
    subtitle: "Join Ethereum Power Users community",
    onboardingDescription:
      "Prove you are one of the biggest Ethereum users and access the governance around the badge on snapshot.",
    ctaLabel: "Access gated channel",
    ctaUrl: "https://discord.gg/sismo",
    congratulationTexts: ["Provide feedback on Discord", "Join Snapshot Space"],
  },
  {
    path: "safe-alert",
    attester: hydraS1SimpleAttester.name,
    network: Network.Polygon,
    attesterType: "hydra-s1",
    badgesCollection: hydraS1SimpleBadges,
    badgesInternalCollectionsIds: [5, 6, 7],
    title: "Safe Alert",
    logoUrl: null,
    subtitle: "Join Safe Alert community",
    onboardingDescription:
      "Safe alert is a dApp that protect the white hats interests by provinding them with a secure way to alert protocols of detected bugs and provinding them with a way to aassess publicly their skils and contribution.",
    ctaLabel: "Go Back to Safe Alert",
    ctaUrl: "http://localhost:3000/",
    congratulationTexts: ["Congratulations !"],
  },
  {
    path: "proof-of-humanity",
    attester: hydraS1SimpleAttester.name,
    network: Network.Polygon,
    attesterType: "hydra-s1",
    badgesCollection: hydraS1SimpleBadges,
    badgesInternalCollectionsIds: [8],
    title: "Proof of Humanity",
    logoUrl: null,
    subtitle: "Prove you are a human with privacy",
    onboardingDescription:
      "This ZK Badge is an attestation proving that you are a human. It is used by diverse applications (e.g Lens) as a sybil resistant tool",
    ctaLabel: "See your badge",
    ctaUrl: "",
    congratulationTexts: [
      "You can now prove that you are a human",
      "and access human-gated services!",
    ],
  },
  {
    path: "synaps-liveness",
    attester: "pythia-1-simple",
    network: Network.Polygon,
    attesterType: "pythia-1",
    badgesCollection: pythia1SimpleBadges,
    badgesInternalCollectionsIds: [0],
    title: "Synaps",
    logoUrl: null,
    subtitle: "Prove you are not a bot",
    onboardingDescription:
      "This ZK Badge is an attestation that you are a human and not a bot. It is used by diverse applications (e.g Lens) as a sybil resistant tool.",
    ctaLabel: "See your badge",
    ctaUrl: "",
    congratulationTexts: [
      "You can now prove that you are",
      "not a bot by showing this badge!",
    ],
  },
  {
    path: "proof-of-lepak-member",
    attester: hydraS1SimpleAttester.name,
    network: Network.Polygon,
    attesterType: "hydra-s1-simple",
    badgesCollection: hydraS1SimpleBadges,
    badgesInternalCollectionsIds: [9],
    title: "Proof of Lepak Member",
    logoUrl: null,
    subtitle: "Prove you are a member from Lepak DAO",
    onboardingDescription:
      "This ZK Badge is an attestation proving that you are a Lepak Member. After getting your zkBadge, you are eligible for voting in Lepak DAO",
    ctaLabel: "See your badge",
    ctaUrl: "",
    congratulationTexts: ["You can now prove that you are a Lepak Member"],
  },
];
