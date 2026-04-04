import { useState } from "react";
import {
	ArrowRight,
	CheckCircle2,
	Clock3,
	MessageSquareQuote,
	MapPinned,
	Phone,
	TimerReset,
	Copy,
	Mail,
} from "lucide-react";

import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const visitSteps = [
	{
		title: "Tell us what hurts",
		description: "Share your concern, preferred time, and any medical history we should know.",
	},
	{
		title: "We confirm quickly",
		description: "Our front desk calls or WhatsApps you with the best available slot.",
	},
	{
		title: "Comfort-first treatment",
		description: "You arrive to a calm, prepared team ready to keep the visit simple and clear.",
	},
];

const highlights = [
	"Same-day consultation where possible",
	"Gentle care for anxious patients",
	"Transparent treatment plan before any procedure",
];

const generateAppointmentId = () => {
	const timestamp = Date.now().toString(36).toUpperCase();
	const random = Math.random().toString(36).substring(2, 8).toUpperCase();
	return `APT-${timestamp}-${random}`;
};

export default function BookAppointmentPage() {
	const [formData, setFormData] = useState({
		fullName: "",
		phone: "",
		email: "",
		visitType: "",
		preferredDate: "",
		preferredTime: "",
		notes: "",
	});

	const [appointmentId, setAppointmentId] = useState<string | null>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState("");

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError("");

		// Validate required fields
		if (
			!formData.fullName ||
			!formData.email ||
			!formData.phone ||
			!formData.visitType ||
			!formData.preferredDate
		) {
			setError("Please fill in all required fields.");
			setIsSubmitting(false);
			return;
		}

		// Generate appointment ID
		const newAppointmentId = generateAppointmentId();

		try {
			// Send to Formspree
			const response = await fetch("https://formspree.io/f/xdapweyq", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					appointmentId: newAppointmentId,
					fullName: formData.fullName,
					email: formData.email,
					phone: formData.phone,
					visitType: formData.visitType,
					preferredDate: formData.preferredDate,
					preferredTime: formData.preferredTime,
					notes: formData.notes,
				}),
			});

			if (!response.ok) {
				throw new Error("Failed to submit appointment");
			}

			// Show success with appointment ID
			setAppointmentId(newAppointmentId);
			setFormData({
				fullName: "",
				phone: "",
				email: "",
				visitType: "",
				preferredDate: "",
				preferredTime: "",
				notes: "",
			});
		} catch (err) {
			setError(
				"Failed to submit appointment. Please try again or call us directly."
			);
			console.error(err);
		} finally {
			setIsSubmitting(false);
		}
	};

	const copyToClipboard = () => {
		if (appointmentId) {
			navigator.clipboard.writeText(appointmentId);
		}
	};

	// Success screen
	if (appointmentId) {
		return (
			<main className="relative overflow-hidden bg-[#fffaf5] text-[#003049]">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(247,127,0,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(252,191,73,0.28),_transparent_32%),linear-gradient(180deg,_#fffaf5_0%,_#ffffff_45%,_#fff7ef_100%)]" />
				<div className="absolute left-[-6rem] top-24 -z-10 h-72 w-72 rounded-full bg-[#f77f00]/10 blur-3xl" />
				<div className="absolute right-[-7rem] top-80 -z-10 h-80 w-80 rounded-full bg-[#fcbf49]/20 blur-3xl" />

				<section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
					<div className="flex min-h-[60vh] items-center justify-center">
						<Card className="w-full max-w-md border-[#003049]/10 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.14)]">
							<CardContent className="space-y-6 pt-8">
								<div className="flex justify-center">
									<div className="rounded-full bg-[#f77f00]/10 p-6">
										<CheckCircle2 className="h-16 w-16 text-[#f77f00]" />
									</div>
								</div>

								<div className="space-y-3 text-center">
									<h2 className="text-3xl font-semibold text-[#003049]">
										Appointment Confirmed!
									</h2>
									<p className="text-slate-600">
										We've received your appointment request. Check your email for details and next steps.
									</p>
								</div>

								<div className="space-y-3 rounded-2xl bg-[#f77f00]/5 p-6">
									<p className="text-sm font-medium text-slate-600">Your Appointment ID</p>
									<div className="flex items-center gap-3 rounded-xl bg-white/80 px-4 py-3">
										<code className="flex-1 text-xl font-mono font-bold text-[#003049]">
											{appointmentId}
										</code>
										<button
											onClick={copyToClipboard}
											className="rounded-lg p-2 hover:bg-[#f77f00]/10 transition-colors"
											title="Copy to clipboard"
										>
											<Copy className="h-5 w-5 text-[#f77f00]" />
										</button>
									</div>
									<p className="text-xs text-slate-500">
										Save this ID for your records. You'll need it when you visit.
									</p>
								</div>

								<div className="space-y-3 rounded-2xl border border-[#003049]/10 bg-slate-50 p-4">
									<div className="flex items-start gap-3">
										<Mail className="mt-1 h-5 w-5 text-[#f77f00] shrink-0" />
										<div>
											<p className="font-medium text-[#003049]">Confirmation email sent</p>
											<p className="text-sm text-slate-600 mt-1">
												We've emailed your appointment details to <strong>{formData.email}</strong>
											</p>
										</div>
									</div>
								</div>

								<div className="space-y-3 border-t border-slate-200 pt-6">
									<p className="text-sm text-slate-600 text-center">
										Questions? Call us at <strong>+91 98765 4321</strong> to confirm your visit.
									</p>
									<Button
										onClick={() => setAppointmentId(null)}
										className="w-full h-12 bg-[#003049] text-white hover:bg-[#00263a]"
									>
										Book Another Appointment
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</section>
			</main>
		);
	}

	return (
		<main className="relative overflow-hidden bg-[#fffaf5] text-[#003049]">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(247,127,0,0.18),_transparent_36%),radial-gradient(circle_at_top_right,_rgba(252,191,73,0.28),_transparent_32%),linear-gradient(180deg,_#fffaf5_0%,_#ffffff_45%,_#fff7ef_100%)]" />
			<div className="absolute left-[-6rem] top-24 -z-10 h-72 w-72 rounded-full bg-[#f77f00]/10 blur-3xl" />
			<div className="absolute right-[-7rem] top-80 -z-10 h-80 w-80 rounded-full bg-[#fcbf49]/20 blur-3xl" />

			<section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
				

				<div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
					<div className="space-y-8">
						<div className="space-y-6">
							<Badge className="flex items-center gap-2 bg-[#f77f00]/10 text-[#f77f00]">
								
								Priority care for pain, checkups, and smile makeovers
							</Badge>

							<div className="space-y-4">
								<h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
									Book your Dental appointment with care you can trust.
								</h1>
								<p className="max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
									Use the form to request a consultation,
								</p>
							</div>

							<div className="grid gap-3 sm:grid-cols-3">
								{highlights.map((item) => (
									<div
										key={item}
										className="rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_8px_30px_rgba(15,23,42,0.06)]"
									>
										<CheckCircle2 className="mb-3 h-5 w-5 text-[#f77f00]" />
										<p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
									</div>
								))}
							</div>
						</div>

						<div className="grid gap-3 sm:grid-cols-3">
							<Card className="border-[#003049]/10 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
								<CardHeader className="pb-3">
									<CardDescription className="flex items-center gap-2 text-slate-500">
										<Clock3 className="h-4 w-4 text-[#f77f00]" />
										Working hours
									</CardDescription>
									<CardTitle className="text-2xl text-[#003049]">Mon-Sat</CardTitle>
								</CardHeader>
								<CardContent className="pt-0 text-sm text-slate-600">9:00 AM - 7:00 PM, with urgent slots reserved daily.</CardContent>
							</Card>

							<Card className="border-[#003049]/10 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
								<CardHeader className="pb-3">
									<CardDescription className="flex items-center gap-2 text-slate-500">
										<MapPinned className="h-4 w-4 text-[#f77f00]" />
										Clinic access
									</CardDescription>
									<CardTitle className="text-2xl text-[#003049]">Easy to reach</CardTitle>
								</CardHeader>
								<CardContent className="pt-0 text-sm text-slate-600">Central location with parking and clear directions for first-time visitors.</CardContent>
							</Card>

							<Card className="border-[#003049]/10 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
								<CardHeader className="pb-3">
									<CardDescription className="flex items-center gap-2 text-slate-500">
										<TimerReset className="h-4 w-4 text-[#f77f00]" />
										Response time
									</CardDescription>
									<CardTitle className="text-2xl text-[#003049]">Quick callbacks</CardTitle>
								</CardHeader>
								<CardContent className="pt-0 text-sm text-slate-600">We confirm most appointment requests as soon as possible during working hours.</CardContent>
							</Card>
						</div>

						<Card className="overflow-hidden border-[#003049]/10 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
							<div className="relative">
								<ImageWithFallback
									src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80"
									alt="Modern dental treatment room"
									className="h-[280px] w-full object-cover sm:h-[340px]"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-[#003049]/70 via-[#003049]/20 to-transparent" />
								<div className="absolute bottom-0 p-5 sm:p-6">
									<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fcbf49]">Clinic Preview</p>
									<h3 className="mt-2 text-2xl text-white">Comfort-first treatment spaces</h3>
									<p className="mt-2 max-w-xl text-sm text-white/90">
										Clean, modern rooms designed to keep your visit calm from consultation to care.
									</p>
								</div>
							</div>
						</Card>
					</div>

					<div className="space-y-6">
						<Card className="overflow-hidden border-[#003049]/10 bg-white/95 shadow-[0_24px_80px_rgba(15,23,42,0.14)] backdrop-blur">
							<div className="h-2 bg-gradient-to-r from-[#003049] via-[#f77f00] to-[#fcbf49]" />
							<CardHeader className="space-y-2 border-b border-slate-100 pb-6">
								<CardTitle className="text-3xl text-[#003049]">Tell us what you need</CardTitle>
								
							</CardHeader>

							<CardContent className="space-y-5 pt-6">
								{error && (
									<div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
										{error}
									</div>
								)}

								<form id="appointment-form" onSubmit={handleSubmit} className="space-y-5">
									<div className="grid gap-4 sm:grid-cols-2">
										<div className="space-y-2">
											<label className="text-sm font-medium text-slate-700" htmlFor="full-name">
												Full name <span className="text-red-500">*</span>
											</label>
											<Input
												id="full-name"
												name="fullName"
												placeholder="enter your name"
												value={formData.fullName}
												onChange={handleInputChange}
												required
											/>
										</div>
										<div className="space-y-2">
											<label className="text-sm font-medium text-slate-700" htmlFor="phone">
												Phone number <span className="text-red-500">*</span>
											</label>
											<Input
												id="phone"
												type="tel"
												name="phone"
												placeholder="phone number"
												value={formData.phone}
												onChange={handleInputChange}
												required
											/>
										</div>
									</div>

									<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<label className="text-sm font-medium text-slate-700" htmlFor="email">
											Email address <span className="text-red-500">*</span>
										</label>
										<Input
											id="email"
											type="email"
											name="email"
											placeholder="email-id"
											value={formData.email}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<label className="text-sm font-medium text-slate-700" htmlFor="visit-type">
											Visit type <span className="text-red-500">*</span>
										</label>
										<Input
											id="visit-type"
											name="visitType"
											placeholder="reason of visit"
											value={formData.visitType}
											onChange={handleInputChange}
											required
										/>
									</div>
								</div>

								<div className="grid gap-4 sm:grid-cols-2">
									<div className="space-y-2">
										<label className="text-sm font-medium text-slate-700" htmlFor="preferred-date">
											Preferred date <span className="text-red-500">*</span>
										</label>
										<Input
											id="preferred-date"
											type="date"
											name="preferredDate"
											value={formData.preferredDate}
											onChange={handleInputChange}
											required
										/>
									</div>
									<div className="space-y-2">
										<label className="text-sm font-medium text-slate-700" htmlFor="preferred-time">
											Preferred time
										</label>
										<Input
											id="preferred-time"
											type="time"
											name="preferredTime"
											value={formData.preferredTime}
											onChange={handleInputChange}
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label className="text-sm font-medium text-slate-700" htmlFor="notes">
										Notes
									</label>
									<Textarea
										id="notes"
										name="notes"
										rows={5}
										placeholder="Tell us about pain, past treatment, or anything the team should know before your visit."
										value={formData.notes}
										onChange={handleInputChange}
									/>
								</div>

								<div className="flex flex-col gap-3 sm:flex-row">
									<Button
										type="submit"
										disabled={isSubmitting}
										className="h-12 flex-1 bg-[#f77f00] text-white hover:bg-[#e56f00] disabled:opacity-50 disabled:cursor-not-allowed"
									>
										{isSubmitting ? "Submitting..." : "Request appointment"}
										{!isSubmitting && <ArrowRight className="h-4 w-4" />}
									</Button>
								</div>
						</form>
							</CardContent>
						</Card>

						<div>
							

							<Card className="border-[#003049]/10 bg-white/90 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
								<CardHeader>
									<CardDescription className="flex items-center gap-2 text-slate-500">
										
									</CardDescription>
									<CardTitle className="text-2xl text-[#003049]">A Clear 3-step visit</CardTitle>
								</CardHeader>
								<CardContent className="grid gap-4 pt-0 md:grid-cols-3">
									{visitSteps.map((step, index) => (
										<div key={step.title} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
											<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fcbf49] text-sm font-semibold text-[#003049]">
												{index + 1}
											</div>
											<div>
												<h3 className="text-base text-[#003049]">{step.title}</h3>
												<p className="mt-1 text-sm leading-6 text-slate-600">{step.description}</p>
												{/* Location Button */}
												<a
													href="https://maps.app.goo.gl/wnAu1mt8BXmTSrLu8"
													target="_blank"
													rel="noopener noreferrer"
													className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#003049] hover:underline"
												>
													📍 Get Directions
												</a>
											</div>
											</div>
									))}
								</CardContent>
							</Card>
						</div>

						
					</div>
				</div>
			</section>
		</main>
	);
}
