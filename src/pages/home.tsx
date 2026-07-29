import Card from "@/components/ui/card";
import CardHeader from "@/components/ui/cardheader";
import Button from "@/components/ui/button";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <Card>

        <CardHeader
          title="Backend Developer"
          subtitle="React • Laravel • PHP • MySQL"
        />

        <p className="text-gray-600">
          Welcome to my portfolio website.
        </p>

        <Button disabled className="mt-6">
          Coming Soon
        </Button>

      </Card>

    </section>
  );
}